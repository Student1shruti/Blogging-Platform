import React from 'react';
import {
  Users,
  Heart,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Mail,
  Flag
} from 'lucide-react';
import { format } from 'date-fns';

const CommunityGuidelines: React.FC = () => {
  const guidelines = [
    {
      icon: Heart,
      title: 'Be Respectful',
      description: 'Treat all community members with kindness and respect',
      dos: [
        'Use inclusive and welcoming language',
        'Respect different opinions and perspectives',
        'Give constructive feedback',
        "Acknowledge others' contributions"
      ],
      donts: [
        'Use hate speech or discriminatory language',
        'Attack or harass other users',
        'Make personal attacks',
        "Dismiss others' experiences"
      ]
    },
    {
      icon: Shield,
      title: 'Create Quality Content',
      description: 'Share valuable, original, and well-crafted content',
      dos: [
        'Write original, thoughtful posts',
        'Fact-check your information',
        'Use proper grammar and formatting',
        'Add relevant tags and categories'
      ],
      donts: [
        'Post spam or duplicate content',
        'Share misleading information',
        'Copy content without attribution',
        'Post low-effort or irrelevant content'
      ]
    },
    {
      icon: Users,
      title: 'Foster Community',
      description: 'Help build a supportive and engaging community',
      dos: [
        "Engage meaningfully with others' content",
        'Share knowledge and expertise',
        'Welcome new community members',
        'Participate in discussions constructively'
      ],
      donts: [
        'Ignore community standards',
        'Create multiple accounts',
        'Manipulate votes or engagement',
        'Promote unrelated content excessively'
      ]
    }
  ];

  const reportingReasons = [
    'Harassment or bullying',
    'Hate speech or discrimination',
    'Spam or misleading content',
    'Copyright infringement',
    'Adult or inappropriate content',
    'Threats or violence',
    'Privacy violations',
    'Other violations'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Guidelines</h1>
            <p className="text-xl text-indigo-100 mb-4 max-w-3xl mx-auto">
              Building a positive, inclusive, and supportive community for all BlogHub users.
            </p>
            <p className="text-sm text-indigo-200">Last updated: {format(new Date(), 'MMMM d, yyyy')}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Community</h2>
          <p className="text-gray-600 mb-4">
            BlogHub is a platform where writers, readers, and thinkers come together to share ideas, stories, and knowledge.
            Our community guidelines help ensure that everyone can participate in a safe, respectful, and enriching environment.
          </p>
          <p className="text-gray-600">
            By using BlogHub, you agree to follow these guidelines. Violations may result in content removal,
            account restrictions, or permanent suspension from the platform.
          </p>
        </section>

        {/* Core Values */}
        <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-600 text-sm">Every voice matters and deserves to be heard with dignity.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">Creating a secure environment for open expression.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building connections through shared stories and ideas.</p>
            </div>
          </div>
        </section>

        {/* Detailed Guidelines */}
        <section className="space-y-8 mb-8">
          {guidelines.map((guideline, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <guideline.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{guideline.title}</h2>
                  <p className="text-gray-600">{guideline.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="font-semibold text-green-800">Do</h3>
                  </div>
                  <ul className="space-y-2">
                    {guideline.dos.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <XCircle className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="font-semibold text-red-800">Don't</h3>
                  </div>
                  <ul className="space-y-2">
                    {guideline.donts.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="h-2 w-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* You can keep the rest sections like Prohibited Content, Reporting, Enforcement, Appeals, and Contact Info from your original code without changes — they are already correct. */}

        {/* Contact Information */}
        <section className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Need Help?</h2>
          </div>
          <p className="text-gray-600 mb-4">
            If you have questions about our community guidelines or need to report a violation, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:13579shrutigupta@gmail.com" className="text-indigo-600 hover:underline">
                13579shrutigupta@gmail.com
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/Student1shruti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                github.com/Student1shruti
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
