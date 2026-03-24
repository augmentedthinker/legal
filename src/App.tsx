import React, { useState } from 'react';
import CiteSource from './components/CiteSource';
import SearchCite from './components/SearchCite';
import ReferenceSources from './components/ReferenceSources';
import ApiKeyManager from './components/ApiKeyManager';
import ModelSelector from './components/ModelSelector';
import courthouseBg from './assets/courthouse-roses-bg.png';
import { Scale, Search, PenTool } from 'lucide-react';

type Tab = 'cite' | 'search';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('cite');

  return (
    <div className="min-h-screen font-sans text-slate-900 relative overflow-hidden legal-bg-shell">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
        style={{ backgroundImage: `url(${courthouseBg})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,16,26,.52),rgba(18,24,38,.30)_24%,rgba(244,241,236,.58)_60%,rgba(245,242,238,.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.22),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(166,36,64,.12),transparent_18%)]" />

      <div className="relative z-10">
        <header className="bg-white/68 backdrop-blur-md border-b border-white/40 sticky top-0 z-10 shadow-[0_10px_30px_rgba(15,23,42,.10)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 md:h-16 py-4 md:py-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="bg-indigo-600/92 p-2 rounded-lg shadow-sm shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">
                    Bluebook Citation Assistant
                  </h1>
                  <p className="hidden lg:block text-xs text-slate-700/80 mt-0.5">
                    Practitioner-mode legal research against a marble-and-roses surface.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <ModelSelector />
                <ApiKeyManager />

                <nav className="flex space-x-1 bg-white/55 backdrop-blur-sm border border-white/45 p-1 rounded-xl shadow-sm">
                  <button
                    onClick={() => setActiveTab('cite')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'cite'
                        ? 'bg-white/92 text-indigo-700 shadow-sm ring-1 ring-white/80'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/45'
                    }`}
                  >
                    <PenTool className="w-4 h-4" />
                    <span className="hidden md:inline">Cite Source</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('search')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === 'search'
                        ? 'bg-white/92 text-indigo-700 shadow-sm ring-1 ring-white/80'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/45'
                    }`}
                  >
                    <Search className="w-4 h-4" />
                    <span className="hidden md:inline">Search & Cite</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {activeTab === 'cite' ? <CiteSource /> : <SearchCite />}

          <div className="pt-12 border-t border-white/35">
            <ReferenceSources />
          </div>
        </main>
      </div>
    </div>
  );
}
