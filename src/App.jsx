import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Canvas3DBackground from "./components/Canvas3DBackground";
import ToastNotification from "./components/ToastNotification";
import Navbar from "./components/Navbar";
import Fold1Hero from "./components/Fold1Hero";
import Fold2SoftwareChaos from "./components/Fold2SoftwareChaos";
import Fold3SavingsCalculator from "./components/Fold3SavingsCalculator";
import Fold4BentoFeatures from "./components/Fold4BentoFeatures";
import Fold5WhyFree from "./components/Fold5WhyFree";
import Fold6SocialProof from "./components/Fold6SocialProof";
import Fold7OnboardingSteps from "./components/Fold7OnboardingSteps";
import Fold8FinalMovementCTA from "./components/Fold8FinalMovementCTA";
import Footer from "./components/Footer";

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="font-body bg-[#F8FAFC] text-[#0F172A] min-h-screen relative overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      
      {/* 3D Space Node Canvas Background Layer */}
      <Canvas3DBackground />

      {/* Global Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <ToastNotification message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
      </AnimatePresence>

      {/* Movement Header Navigation */}
      <Navbar />

      {/* 8 Premium Conversion Folds */}
      <main>
        <Fold1Hero onNotify={showToast} />
        <Fold2SoftwareChaos />
        <Fold3SavingsCalculator />
        <Fold4BentoFeatures />
        <Fold5WhyFree />
        <Fold6SocialProof />
        <Fold7OnboardingSteps />
        <Fold8FinalMovementCTA onNotify={showToast} />
      </main>

      {/* Movement Footer */}
      <Footer />

    </div>
  );
}
