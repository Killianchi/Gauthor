import React, { useState } from 'react';
import { PhoneInput } from './components/PhoneInput';
import { Button } from './components/ui/button';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';
import { Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [isLoading, setIsLoading] = useState(false);

  const handleReceiveCall = async () => {
    setIsLoading(true);
    
    try {
      // Send phone number to n8n webhook
      const response = await fetch('http://localhost:5678/webhook-test/c8a067c0-89c5-4db8-89e4-f7c7e6f3bf76', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phoneNumber,
          country: selectedCountry
        })
      });

      if (response.ok) {
        alert('Call initiated! Our AI Storyteller will call you shortly.');
      } else {
        throw new Error('Failed to initiate call');
      }
    } catch (error) {
      console.error('Error calling webhook:', error);
      alert('Sorry, there was an error initiating your call. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isPhoneValid = phoneNumber.replace(/\D/g, '').length >= 10;

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm">World's fastest autobiography service</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
                Get your story told, instantly.
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                World's fastest and easiest way to create your autobiography—powered by AI interviews and instant publishing.
              </p>
            </div>

            {/* Emotional Hook */}
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border max-w-xl mx-auto lg:mx-0">
              <p className="text-lg italic text-muted-foreground">
                "Imagine your memories, your voice, your book—in days, not months."
              </p>
            </div>
          </div>

          {/* Right side - Phone Input Card */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl shadow-2xl border border-border p-8 space-y-6">
              {/* Header */}
              <div className="space-y-3 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-2">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl">Start Your Story</h2>
                <p className="text-muted-foreground">
                  Enter your phone number to receive a call from your personal AI Storyteller.
                </p>
              </div>

              {/* Phone Input Form */}
              <div className="space-y-6 pt-2">
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  selectedCountry={selectedCountry}
                  onCountryChange={setSelectedCountry}
                />

                {/* CTA Button */}
                <button
                  onClick={handleReceiveCall}
                  disabled={!isPhoneValid || isLoading}
                  className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] rounded-lg px-6 py-5 text-xl md:text-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none touch-manipulation whitespace-nowrap"
                  style={{
                    boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
                    backgroundImage: 'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)'
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Receive Free Call Now
                    </>
                  )}
                </button>

                {/* Disclaimer */}
                <div className="text-center pt-2">
                  <p className="text-xs text-muted-foreground/80">
                    Your number is secure and will never be used for marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </div>
  );
}
