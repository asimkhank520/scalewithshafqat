import React, { useState } from 'react';
import { Star, MessageSquare, Plus, Check, MapPin } from 'lucide-react';
import { reviews as initialReviews, agencyInfo } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      author,
      role: role || 'Business Owner',
      company: company || 'Local Client',
      rating,
      text,
      date: 'Just now',
      verified: true,
      avatarUrl: `https://picsum.photos/seed/${author.replace(/\s+/g, '')}/100/100`
    };

    setReviewsList([newReview, ...reviewsList]);
    setAuthor('');
    setRole('');
    setCompany('');
    setRating(5);
    setText('');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Trust Overview Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16" id="reviews-top-row">
          
          <div className="lg:col-span-6 text-left" id="reviews-intro">
            <h2 className="text-emerald-400 font-mono text-sm uppercase tracking-widest font-bold mb-3">Client Feedback</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Highly Rated by Scaling E-Commerce & Lead Generation Brands
            </h3>
            <div className="h-1.5 w-16 bg-emerald-500 mt-6 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <p className="text-gray-400 mt-6 text-base sm:text-lg">
              We focus on building lasting relationships with business owners in Attock and around the globe. Our client retention is built strictly on transparent ROAS and stellar communication.
            </p>
          </div>

          <div className="lg:col-span-6 bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl" id="reviews-score-card">
            <div className="text-center sm:text-left">
              <span className="text-gray-400 font-mono text-xs uppercase tracking-wider block mb-1">Google Certified Rating</span>
              <div className="flex items-baseline justify-center sm:justify-start gap-2">
                <span className="text-white text-5xl font-black tracking-tight">{agencyInfo.googleRating.toFixed(1)}</span>
                <span className="text-gray-500 text-lg font-bold">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mt-2">
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <span className="text-gray-500 text-xs mt-2 block font-mono">Based on verified advertiser audits</span>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all flex items-center justify-center gap-2 text-sm"
              id="write-review-toggle-btn"
            >
              <Plus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>

        </div>

        {/* Leave a Review Local Form Modal/Card */}
        {showForm && (
          <div className="mb-12 bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto shadow-2xl" id="review-submission-form-box">
            <h4 className="text-white font-extrabold text-xl mb-6">Leave Your Verified Review</h4>
            
            {success ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl text-center text-emerald-400 flex flex-col items-center gap-3">
                <div className="p-3 bg-emerald-500 text-[#090d16] rounded-full">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h5 className="font-bold text-lg">Thank you!</h5>
                <p className="text-sm text-gray-400">Your review was submitted successfully and is visible live below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="e.g. Shafqat Saleem"
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-1.5">Designation / Role</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Founder"
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Digital Brands"
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-mono uppercase block mb-1.5">Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(parseInt(e.target.value))}
                      className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="5">5 Stars ★★★★★</option>
                      <option value="4">4 Stars ★★★★</option>
                      <option value="3">3 Stars ★★★</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-mono uppercase block mb-1.5">Review Comment *</label>
                  <textarea
                    required
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Describe your scaling experience with Shafqat Saleem Ads..."
                    className="w-full bg-gray-950 border border-gray-800 focus:border-emerald-500/50 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-[#090d16] font-bold py-3 rounded-lg text-sm transition-all"
                >
                  Post Live Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="reviews-grid">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-900/40 border border-gray-800/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-emerald-500/15 transition-all shadow-lg"
              id={`review-item-${rev.id}`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center gap-3.5 mb-5">
                  <img
                    src={rev.avatarUrl || `https://picsum.photos/seed/${rev.author.replace(/\s+/g, '')}/80/80`}
                    alt={`${rev.author} Avatar reviewer`}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full border border-gray-800 object-cover shrink-0"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">{rev.author}</h4>
                    <span className="text-gray-400 text-[10px] sm:text-xs block mt-0.5">
                      {rev.role} {rev.company ? `at ${rev.company}` : ''}
                    </span>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-0.5 text-amber-400 mb-4" id={`review-stars-${rev.id}`}>
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-4 h-4 ${starIdx < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-800'}`}
                    />
                  ))}
                </div>

                {/* Text comment */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Verified badge */}
              <div className="pt-6 border-t border-gray-800/40 mt-6 flex items-center justify-between text-[10px] sm:text-xs text-gray-500 font-mono">
                <span>{rev.date}</span>
                {rev.verified && (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Verified Client</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
