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
        <meta
          name="description"
          content="Transform your voice into a powerful tool. Join Sweet Like Honey, a 5-week online public speaking program for communicators who want to stand out."
        />
        <meta
          name="keywords"
          content="Public Speaking, Online Training, Kaizen, Communication Skills, Speaking with Confidence"
        />
        <meta name="author" content="Kaizen Consultancy and Educational Services" />
      </Head>

      <main className="bg-yellow-50 text-gray-800 font-sans">
        {/* HERO */}
        <section className="text-center py-12 px-6 max-w-5xl mx-auto">
          <Image src="/planet-03.png" alt="Sweet Like Honey" width={80} height={80} className="mx-auto mb-4" />
          <h1 className="text-5xl font-extrabold text-yellow-600 drop-shadow">Sweet Like Honey</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            An Intensive Public Speaking Experience for Communicators Who Want to Stand Out.
          </p>
          <a
            href="#register"
            className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded shadow"
          >
            Claim Early Bird Offer
          </a>
        </section>

        {/* COUNTDOWN */}
        <section className="text-center py-6">
          <p className="text-lg font-semibold text-red-600">
            Early Bird Ends In: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-12 bg-white px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">This Program is Perfect For You If You Are:</h2>
          <ul className="text-left list-disc list-inside text-lg space-y-2">
            {whoIsItFor.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* BENEFITS */}
        <section className="py-12 px-6 bg-yellow-100 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What You’ll Gain</h2>
          <ul className="text-left list-disc list-inside text-lg space-y-2">
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* PRICING */}
        <section id="register" className="py-12 bg-white px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Enrollment Options</h2>
          <p className="text-xl font-semibold text-green-600 mb-2">
            Early Bird: ₦20,000 <span className="text-sm">(Limited Slots)</span>
          </p>
          <p className="text-lg text-gray-700 mb-6">Regular: ₦25,000</p>
          <a
            href="https://selar.co/your-payment-link"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded"
          >
            Secure My Spot
          </a>
          <p className="text-sm mt-4 text-gray-500">Note: Early bird closes 25th June</p>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-yellow-50 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="font-semibold text-gray-800">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-orange-500 text-white text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Speak So People Listen?</h2>
          <a
            href="https://selar.co/your-payment-link"
            className="inline-block mt-4 bg-white text-orange-600 font-bold py-3 px-6 rounded hover:bg-gray-100"
          >
            Join Sweet Like Honey
          </a>
        </section>
      </main>
    </>
  )
}