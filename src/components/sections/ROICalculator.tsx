import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [teamSize, setTeamSize] = useState(1);

  const yearlySavings = hoursPerWeek * hourlyRate * teamSize * 52;
  const hoursSavedYearly = hoursPerWeek * teamSize * 52;

  return (
    <section className="py-24 relative overflow-hidden bg-foreground/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              ROI Analysis
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop wasting <span className="text-gradient">human potential</span> on manual tasks.
            </h2>
            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              Use my automation ROI calculator to estimate how much your business could save by implementing intelligent AI workflows.
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Manual Hours / Week / Person</span>
                  <span className="text-primary">{hoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Average Hourly Rate (USD)</span>
                  <span className="text-primary">${hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="text-primary">{teamSize} {teamSize === 1 ? 'Person' : 'People'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[2.5rem] p-8 md:p-12 border border-foreground/5 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Estimated Yearly Savings</h3>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Total Financial ROI</div>
                  <div className="text-6xl md:text-7xl font-bold text-gradient">
                    ${yearlySavings.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-foreground/5 border border-foreground/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Time Saved</span>
                    </div>
                    <div className="text-2xl font-bold">{hoursSavedYearly.toLocaleString()} hrs</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-foreground/5 border border-foreground/5">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Per Month</span>
                    </div>
                    <div className="text-2xl font-bold">${Math.round(yearlySavings / 12).toLocaleString()}</div>
                  </div>
                </div>

                <button className="w-full py-5 bg-foreground text-background rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all group">
                  Claim Your Efficiency
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
