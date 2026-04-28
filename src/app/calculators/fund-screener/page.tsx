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
        
        // 1. Check Cache
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

        // Try the API first, fallback to local json if it fails or CORS
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

        // 2. Set Cache
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            date: today,
            data: flattenedSchemes
          }));
        } catch (e) {
          // Ignore cache write errors (e.g., quota exceeded)
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
    setPage(1); // Reset pagination on search
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBackToCalculators={true} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <PieChart className="mr-3 h-8 w-8 text-blue-600" />
            Live Mutual Fund Screener
          </h1>
          <p className="text-gray-600">
            Find the latest Net Asset Value (NAV) and details of mutual funds directly from AMFI
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Section */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-blue-600" />
                  Filters
                </CardTitle>
                <CardDescription>Search by name or category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="searchQuery">Search Fund Name or ID</Label>
                  <div className="relative mt-2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="searchQuery"
                      placeholder="e.g. HDFC Top 100"
                      className="pl-9"
                      value={filters.searchQuery}
                      onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Fund Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                    <SelectTrigger className="mt-2">
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
                  <Label htmlFor="fund-house">Fund House</Label>
                  <Select value={filters.fundHouse} onValueChange={(value) => setFilters({ ...filters, fundHouse: value })}>
                    <SelectTrigger className="mt-2">
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
                  <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                    Apply Filters
                  </Button>
                  <Button onClick={resetFilters} variant="outline" className="w-full" disabled={loading}>
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {loading ? (
              <Card className="h-96 flex flex-col items-center justify-center">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600">Fetching latest NAV data from AMFI...</p>
              </Card>
            ) : error ? (
              <Card className="h-96 flex flex-col items-center justify-center text-red-600 p-8">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-bold mb-2">Error Loading Data</h3>
                <p className="text-center">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
                  Try Again
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Results <span className="text-gray-500 font-normal text-sm ml-2">(Showing {paginatedSchemes.length} of {filteredSchemes.length})</span>
                  </h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" /> Prev
                    </Button>
                    <span className="py-1 px-3 text-sm border rounded bg-gray-50 flex items-center justify-center min-w-[3rem]">
                      {page} / {totalPages || 1}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages || totalPages === 0}
                    >
                      Next <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {paginatedSchemes.length === 0 ? (
                  <Card className="p-12 text-center text-gray-500">
                    <p>No funds found matching your criteria.</p>
                  </Card>
                ) : (
                  paginatedSchemes.map((fund, index) => (
                    <Card key={`${fund.schemeId}-${index}`} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-5">
                        <div className="grid md:grid-cols-4 gap-4 items-center">
                          <div className="md:col-span-2 space-y-2">
                            <h3 className="text-base font-bold text-gray-900 leading-tight">
                              {fund.schemeName}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge variant="outline" className="text-xs bg-gray-50">{fund.category}</Badge>
                              <Badge className="bg-blue-50 text-blue-700 text-xs hover:bg-blue-100 border-blue-200">{fund.type}</Badge>
                            </div>
                            <p className="text-sm text-gray-500">{fund.mutualFundName} &bull; ID: {fund.schemeId}</p>
                          </div>

                          <div className="text-left md:text-right md:col-span-2 flex flex-col items-start md:items-end justify-center">
                            <div className="text-sm text-gray-500 mb-1">Latest NAV ({fund.date})</div>
                            <div className="text-2xl font-bold text-green-600 flex items-center">
                              ₹{parseFloat(fund.netAssetValue).toFixed(4)}
                              <TrendingUp className="h-5 w-5 ml-2" />
                            </div>
                            <Button className="mt-3 bg-red-600 hover:bg-red-700 text-white h-8 text-xs">
                              Invest in this fund
                            </Button>
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
                      >
                        Previous Page
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
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
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> Past performance is not indicative of future results.
              Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
              Data is sourced directly from AMFI (Association of Mutual Funds in India).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
