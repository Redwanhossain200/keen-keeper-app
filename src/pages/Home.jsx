import { useEffect, useState } from 'react';
import FriendCard from '../components/FriendCard';
import SummaryCards from '../components/SummaryCards';
import { FiPlus } from 'react-icons/fi';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50/50 pb-12 md:pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <section className="py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight px-2">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base px-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] hover:bg-[#1a3a2d] text-white hover:scale-105 transition-all active:scale-95 border-none py-6 px-8 rounded-lg shadow-lg mb-10">
            <FiPlus /> Add a Friend
          </button>
          <SummaryCards friends={friends} />
        </section>

        <section className="border-t-2 border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center md:text-left">
            Your Friends
          </h2>
          {loading ? (
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
export default Home;
