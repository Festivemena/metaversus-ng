// pages/index.js

import Head from 'next/head'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-25T23:59:59')
    const difference = +targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const whoIsItFor = [
    'A tutor or teacher who wants students to stay engaged',
    'A coach or mentor ready to inspire with clarity',
    'An event host or team lead who wants to hold attention',
    'A business owner who wants to speak persuasively',
    'A student or content creator eager to grow in confidence',
  ]

  const benefits = [
    'Speak with clarity, confidence, and control',
    'Connect emotionally with any audience',
    'Learn powerful storytelling & message delivery',
    'Master your voice tone, pauses, and body language',
    'Overcome fear, anxiety, and self-doubt',
    'Receive a certificate and leave with lifelong skills',
  ]

  const faqs = [
    {
      q: 'Will I get the replay if I miss a session?',
      a: 'Yes, all sessions are recorded and replays will be provided.',
    },
    {
      q: 'Is this for beginners or experienced speakers?',
      a: "It's perfect for both – beginners and those looking to improve.",
    },
    {
      q: 'What happens after payment?',
      a: 'You will receive an email confirmation and be added to our private Telegram group.',
    },
    {
      q: 'Do I need to speak live during the training?',
      a: 'Yes, there will be practice sessions, but support will be provided throughout.',
    },
    {
      q: 'How do I get my certificate?',
      a: "You'll receive a digital certificate upon completing all training modules.",
    },
  ]

  return (
    <>
      <Head>
        <title>Sweet Like Honey – Public Speaking Training</title>
        <meta name="description" content="Public speaking experience for educators, leaders, creators and communicators." />
      </Head>

      <main className="bg-soft text-dark font-sans">
        {/* HERO */}
        <section className="bg-honey text-white text-center py-16 px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-sm">Sweet Like Honey</h1>
          <p className="mt-4 text-xl max-w-xl mx-auto">
            An Intensive Public Speaking Experience for Communicators Who Want to Stand Out.
          </p>
          <a href="#register" className="mt-6 inline-block bg-white text-honey font-bold py-3 px-6 rounded shadow hover:bg-yellow-100 transition">
            Claim Early Bird Offer
          </a>
        </section>

        {/* COUNTDOWN */}
        <section className="bg-white text-center py-6">
          <p className="text-lg font-semibold text-red-600">
            Early Bird Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-12 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <ul className="text-left list-disc list-inside text-lg space-y-2">
            {whoIsItFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="py-12 px-6 bg-yellow-50 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What You’ll Gain</h2>
          <ul className="text-left list-disc list-inside text-lg space-y-2">
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* PRICING */}
        <section id="register" className="py-12 px-6 bg-white text-center max-w-3xl mx-auto rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-2xl font-bold text-green-600 mb-2">₦20,000 <span className="text-base text-gray-500">(Early Bird)</span></p>
          <p className="text-lg text-gray-600 mb-4">₦25,000 Regular</p>
          <a href="https://selar.co/your-payment-link" className="inline-block bg-honey text-white font-bold py-3 px-6 rounded hover:bg-yellow-600 transition">
            Secure My Spot
          </a>
          <p className="text-sm mt-3 text-gray-500">Note: Early bird closes 25th June</p>
        </section>

        {/* FAQ */}
        <section className="py-12 px-6 bg-soft max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <p className="font-semibold">{faq.q}</p>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-honey text-white text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Speak So People Listen?</h2>
          <a
            href="https://selar.co/your-payment-link"
            className="inline-block mt-4 bg-white text-honey font-bold py-3 px-6 rounded hover:bg-yellow-100"
          >
            Join Sweet Like Honey
          </a>
        </section>
      </main>
    </>
  )
}