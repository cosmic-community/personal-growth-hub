'use client';

import { useState, useEffect } from 'react';
import { Mail, Users, TrendingUp, UserX, Calendar, ExternalLink, Trash2, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import LoadingSpinner from './LoadingSpinner';

interface NewsletterSubscriber {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  modified_at: string;
  metadata: {
    email: string;
    signup_date: string;
    source: string;
    status: string;
  };
}

interface SubscriberStats {
  total: number;
  active: number;
  unsubscribed: number;
  recentSignups: number;
}

export function SubscribersList() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [stats, setStats] = useState<SubscriberStats>({
    total: 0,
    active: 0,
    unsubscribed: 0,
    recentSignups: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubscribers, setSelectedSubscribers] = useState<Set<string>>(new Set());
  const [showEmails, setShowEmails] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [subscribersResponse, statsResponse] = await Promise.all([
        fetch('/api/subscribers'),
        fetch('/api/subscribers/stats')
      ]);

      if (!subscribersResponse.ok || !statsResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const subscribersData = await subscribersResponse.json();
      const statsData = await statsResponse.json();

      setSubscribers(subscribersData.subscribers || []);
      setStats(statsData || {
        total: 0,
        active: 0,
        unsubscribed: 0,
        recentSignups: 0
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching subscribers:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectSubscriber = (subscriberId: string) => {
    const newSelected = new Set(selectedSubscribers);
    if (newSelected.has(subscriberId)) {
      newSelected.delete(subscriberId);
    } else {
      newSelected.add(subscriberId);
    }
    setSelectedSubscribers(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedSubscribers.size === subscribers.length) {
      setSelectedSubscribers(new Set());
    } else {
      setSelectedSubscribers(new Set(subscribers.map(sub => sub.id)));
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'unsubscribed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const exportSubscribers = () => {
    const csvContent = [
      ['Email', 'Status', 'Source', 'Signup Date'].join(','),
      ...subscribers.map(sub => [
        sub.metadata.email,
        sub.metadata.status,
        sub.metadata.source,
        sub.metadata.signup_date
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">Loading subscribers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="text-red-500 mb-4">
            <Mail size={48} className="mx-auto" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Subscribers</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={fetchSubscribers} className="w-full">
            Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Newsletter Subscribers</h1>
              <p className="text-gray-600">Manage your newsletter subscriber list</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowEmails(!showEmails)}
                variant="outline"
                className="flex items-center gap-2"
              >
                {showEmails ? <EyeOff size={16} /> : <Eye size={16} />}
                {showEmails ? 'Hide Emails' : 'Show Emails'}
              </Button>
              <Button
                onClick={exportSubscribers}
                className="flex items-center gap-2"
                disabled={subscribers.length === 0}
              >
                <ExternalLink size={16} />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Subscribers</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                  <Users size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <Mail size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
                  <p className="text-2xl font-bold text-red-600">{stats.unsubscribed}</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full text-red-600">
                  <UserX size={24} />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Recent (7 days)</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.recentSignups}</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <TrendingUp size={24} />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Subscribers Table */}
        <Card className="overflow-hidden">
          {subscribers.length === 0 ? (
            <div className="p-12 text-center">
              <Mail size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Subscribers Yet</h3>
              <p className="text-gray-600">
                When people sign up for your newsletter, they'll appear here.
              </p>
            </div>
          ) : (
            <>
              {/* Table Header */}
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedSubscribers.size === subscribers.length}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Select all ({subscribers.length})
                      </span>
                    </label>
                  </div>
                  {selectedSubscribers.size > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {selectedSubscribers.size} selected
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {subscribers.map((subscriber) => (
                  <div key={subscriber.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <input
                          type="checkbox"
                          checked={selectedSubscribers.has(subscriber.id)}
                          onChange={() => handleSelectSubscriber(subscriber.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {showEmails ? subscriber.metadata.email : '••••••@••••••.com'}
                            </p>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(subscriber.metadata.status)}`}>
                              {subscriber.metadata.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {formatDate(subscriber.metadata.signup_date)}
                            </span>
                            <span>Source: {subscriber.metadata.source}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}