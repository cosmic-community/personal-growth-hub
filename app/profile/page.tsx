'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { 
  User, 
  Mail, 
  Calendar, 
  Settings, 
  BookOpen, 
  Target,
  Award,
  Clock,
  TrendingUp,
  LogOut,
  Edit3,
  Save,
  X
} from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';

interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedDate: string;
  icon: string;
}

interface Activity {
  id: string;
  title: string;
  type: string;
  completedDate: string;
  duration: number;
}

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Completed your first session',
    earnedDate: '2024-01-15',
    icon: '🎯'
  },
  {
    id: '2',
    title: 'Week Warrior',
    description: 'Completed 7 consecutive days',
    earnedDate: '2024-01-22',
    icon: '🏆'
  }
];

const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Mindfulness Meditation',
    type: 'Meditation',
    completedDate: '2024-01-20',
    duration: 15
  },
  {
    id: '2',
    title: 'Goal Setting Workshop',
    type: 'Workshop',
    completedDate: '2024-01-19',
    duration: 45
  }
];

export default function ProfilePage(): JSX.Element {
  const { user, logout, updateProfile } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    bio: ''
  });

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    setEditForm({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      bio: user.bio || ''
    });
  }, [user, router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = async (): Promise<void> => {
    await logout();
    router.push('/');
  };

  const handleSaveProfile = async (): Promise<void> => {
    try {
      await updateProfile(editForm);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const totalMinutes = mockActivities.reduce((total, activity) => total + activity.duration, 0);
  const totalSessions = mockActivities.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <User size={40} className="text-teal-600" />
              </div>
              <div className="text-white">
                {isEditing ? (
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={editForm.firstName}
                        onChange={(e) => setEditForm(prev => ({ ...prev, firstName: e.target.value }))}
                        className="px-2 py-1 rounded text-black text-2xl font-bold"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        value={editForm.lastName}
                        onChange={(e) => setEditForm(prev => ({ ...prev, lastName: e.target.value }))}
                        className="px-2 py-1 rounded text-black text-2xl font-bold"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={handleSaveProfile}
                        size="sm"
                        className="bg-white text-teal-600 hover:bg-gray-100"
                      >
                        <Save size={16} className="mr-1" />
                        Save
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                        size="sm"
                        className="border-white text-white hover:bg-white hover:text-teal-600"
                      >
                        <X size={16} className="mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold">
                      {user.firstName} {user.lastName}
                    </h1>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-1">
                        <Mail size={16} />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>Joined {new Date(user.joinedDate || '').toLocaleDateString()}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {!isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                >
                  <Edit3 size={16} className="mr-2" />
                  Edit Profile
                </Button>
              )}
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600"
              >
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Quick Actions */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-teal-600 mb-2" />
                  <div className="text-2xl font-bold">{totalMinutes}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
              </Card>
              
              <Card className="p-4 text-center">
                <div className="flex flex-col items-center">
                  <BookOpen className="w-8 h-8 text-amber-600 mb-2" />
                  <div className="text-2xl font-bold">{totalSessions}</div>
                  <div className="text-sm text-muted-foreground">Sessions</div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Target className="w-4 h-4 mr-2" />
                  Set New Goal
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Content
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-amber-600" />
                Achievements
              </h3>
              <div className="space-y-3">
                {mockAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Middle Column - Bio and Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Section */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  value={editForm.bio}
                  onChange={(e) => setEditForm(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                  rows={4}
                  placeholder="Tell us about yourself, your goals, and what you're working on..."
                />
              ) : (
                <p className="text-muted-foreground">
                  {user.bio || "Share a bit about yourself, your goals, and what you're working on in your personal growth journey."}
                </p>
              )}
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-teal-600" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {mockActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.type} • {new Date(activity.completedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.duration} min
                    </div>
                  </div>
                ))}
              </div>
              
              {mockActivities.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No activities yet. Start your journey today!</p>
                </div>
              )}
            </Card>

            {/* Progress Overview */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">This Week's Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sessions Completed</span>
                    <span>2/5</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Weekly Goal</span>
                    <span>60/100 min</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}