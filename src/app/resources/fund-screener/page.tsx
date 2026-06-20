'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PieChart, ArrowLeft, TrendingUp, Shield, Filter, Search, Loader2, ArrowRight } from 'lucide-react'
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

interface Scheme {
  mutualFundName: string;
  mutualFundId: string;
  type: string;
  category: string;
  schemeId: string;
  schemeName: string;
  date: string;
  netAssetValue: string;
}

export default function FundScreener() {
  const [allSchemes, setAllSchemes] = useState<Scheme[]>([]);
  const [filteredSchemes, setFilteredSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState({
    searchQuery: '',
    category: 'all',
    fundHouse: 'all'
  });

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const CACHE_KEY = 'amfi_nav_data';
        const today = new Date().toDateString();
        
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed.date === today && parsed.data && parsed.data.length > 0) {
              setAllSchemes(parsed.data);
              setFilteredSchemes(parsed.data);
              setError(null);
              setLoading(false);
              return;
            }
          }
        } catch (e) {
          // Ignore cache read errors
        }

        let response = await fetch('https://www.amfiindia.com/api/latest-nav').catch(() => null);
        if (!response || !response.ok) {
          response = await fetch('/latest-nav.json');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();

        const flattenedSchemes: Scheme[] = [];
        jsonData.data.forEach((d: any) => {
          d.categories?.forEach((c: any) => {
            c.groups?.forEach((g: any) => {
              g.schemes?.forEach((s: any) => {
                flattenedSchemes.push({
                  mutualFundName: s.mutualFundName || g.mutualFundName,
                  mutualFundId: s.mutualFundId || g.mutualFundId,
                  type: s.type || c.type || d.type,
                  category: s.category || c.category,
                  schemeId: s.schemeId,
                  schemeName: s.schemeName,
                  date: s.date,
                  netAssetValue: s.netAssetValue
                });
              });
            });
          });
        });

        setAllSchemes(flattenedSchemes);
        setFilteredSchemes(flattenedSchemes);
        setError(null);

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            date: today,
            data: flattenedSchemes
          }));
        } catch (e) {
          // Ignore cache write errors
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const uniqueCategories = useMemo(() => {
    const cats = new Set(allSchemes.map(s => s.category).filter(Boolean));
    return Array.from(cats).sort();
  }, [allSchemes]);

  const uniqueFundHouses = useMemo(() => {
    const funds = new Set(allSchemes.map(s => s.mutualFundName).filter(Boolean));
    return Array.from(funds).sort();
  }, [allSchemes]);

  const handleSearch = () => {
    const query = filters.searchQuery.toLowerCase();
    const filtered = allSchemes.filter(s => {
      const matchSearch = s.schemeName.toLowerCase().includes(query) || s.schemeId.includes(query);
      const matchCategory = filters.category === 'all' || s.category === filters.category;
      const matchFundHouse = filters.fundHouse === 'all' || s.mutualFundName === filters.fundHouse;
      return matchSearch && matchCategory && matchFundHouse;
    });
    setFilteredSchemes(filtered);
    setPage(1);
  }

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      fundHouse: 'all'
    });
    setFilteredSchemes(allSchemes);
    setPage(1);
  }

  const totalPages = Math.ceil(filteredSchemes.length / ITEMS_PER_PAGE);
  const paginatedSchemes = filteredSchemes.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Live Mutual Fund Screener | Sarthi SIP",
    "description": "Screen and search live mutual fund Net Asset Values (NAV) sourced daily from AMFI.",
    "url": "https://sarthisip.com/resources/fund-screener",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "All"
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-white to-rose-50/50 py-12 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-3">
          <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
            Interactive Tools
          </Badge>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
            <PieChart className="h-8 w-8 text-red-600" />
            Live Mutual Fund Screener
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Find the latest Net Asset Value (NAV) and details of mutual funds directly from AMFI.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 flex-grow">

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Filter className="mr-2 h-5 w-5 text-red-600" />
                  Filters
                </CardTitle>
                <CardDescription>Search by name or category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="searchQuery" className="text-slate-700">Search Fund Name or ID</Label>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="searchQuery"
                      placeholder="e.g. HDFC Top 100"
                      className="pl-9 focus-visible:ring-red-500"
                      value={filters.searchQuery}
                      onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category" className="text-slate-700">Fund Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                    <SelectTrigger className="mt-2 focus:ring-red-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {uniqueCategories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fund-house" className="text-slate-700">Fund House</Label>
                  <Select value={filters.fundHouse} onValueChange={(value) => setFilters({ ...filters, fundHouse: value })}>
                    <SelectTrigger className="mt-2 focus:ring-red-500">
                      <SelectValue placeholder="Select fund house" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fund Houses</SelectItem>
                      {uniqueFundHouses.map(fh => (
                        <SelectItem key={fh} value={fh}>{fh}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 pt-4">
                  <Button onClick={handleSearch} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold" disabled={loading}>
                    Apply Filters
                  </Button>
                  <Button onClick={resetFilters} variant="outline" className="w-full font-semibold" disabled={loading}>
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {loading ? (
              <Card className="h-96 flex flex-col items-center justify-center border-slate-200">
                <Loader2 className="h-12 w-12 text-red-600 animate-spin mb-4" />
                <p className="text-slate-500 font-semibold">Fetching latest NAV data from AMFI...</p>
              </Card>
            ) : error ? (
              <Card className="h-96 flex flex-col items-center justify-center text-red-600 p-8 border-slate-200">
                <Shield className="h-12 w-12 mb-4 text-red-600" />
                <h3 className="text-lg font-bold mb-2">Error Loading Data</h3>
                <p className="text-center text-slate-500">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline" className="mt-4 border-red-600 text-red-600 hover:bg-red-50">
                  Try Again
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <h2 className="text-lg font-bold text-slate-900">
                    Results <span className="text-slate-400 font-normal text-sm ml-2">(Showing {paginatedSchemes.length} of {filteredSchemes.length})</span>
                  </h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="h-8"
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" /> Prev
                    </Button>
                    <span className="py-1 px-3 text-sm border border-slate-200 rounded bg-slate-50 flex items-center justify-center min-w-[3rem] font-bold text-slate-700">
                      {page} / {totalPages || 1}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages || totalPages === 0}
                      className="h-8"
                    >
                      Next <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {paginatedSchemes.length === 0 ? (
                  <Card className="p-12 text-center text-slate-500 border-slate-200">
                    <p className="font-medium">No funds found matching your criteria.</p>
                  </Card>
                ) : (
                  paginatedSchemes.map((fund, index) => (
                    <Card key={`${fund.schemeId}-${index}`} className="hover:shadow-md transition-shadow border-slate-200">
                      <CardContent className="p-5">
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                          <div className="md:col-span-2 space-y-2">
                            <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                              {fund.schemeName}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="text-xs bg-slate-50 text-slate-600 border-slate-200">{fund.category}</Badge>
                              <Badge className="bg-red-50 text-red-700 text-xs hover:bg-red-100 border-red-100">{fund.type}</Badge>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">{fund.mutualFundName} &bull; ID: {fund.schemeId}</p>
                          </div>

                          <div className="text-left md:text-right md:col-span-2 flex flex-col items-start md:items-end justify-center">
                            <div className="text-xs text-slate-500 mb-1">Latest NAV ({fund.date})</div>
                            <div className="text-2xl font-bold text-emerald-700 flex items-center">
                              ₹{parseFloat(fund.netAssetValue).toFixed(4)}
                              <TrendingUp className="h-5 w-5 ml-2 text-emerald-600" />
                            </div>
                            <Link href="/contact" className="mt-3">
                              <Button className="bg-red-600 hover:bg-red-700 text-white h-9 text-xs font-semibold px-4">
                                Invest in this fund
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}

                {totalPages > 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="font-semibold"
                      >
                        Previous Page
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="font-semibold"
                      >
                        Next Page
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-amber-50/50 border-amber-100">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Disclaimer:</strong> Past performance is not indicative of future results.
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
              Data is sourced directly from AMFI (Association of Mutual Funds in India).
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
