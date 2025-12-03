import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <Layout>
            <div className="pt-24 pb-12 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-blue-200 max-w-3xl">
                        Get in touch with our team for inquiries about global sourcing, distribution, and partnership opportunities.
                    </p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Whether you are a producer looking for market access or an industrial consumer seeking reliable supply, our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-slate-600 mb-2">For general inquiries and trade opportunities:</p>
                                        <a href="mailto:contact@nitrogenagencies.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                            contact@nitrogenagencies.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-slate-600 mb-2">Speak directly with our commercial team:</p>
                                        <a href="tel:+441234567890" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                            +44 (0) 1234 567 890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">Our Locations</h3>
                                        <div className="space-y-4 mt-2">
                                            <div>
                                                <h4 className="font-semibold text-slate-800">Headquarters (UK)</h4>
                                                <p className="text-slate-600">
                                                    Edinburgh, Scotland<br />
                                                    United Kingdom
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800">Regional Office (PY)</h4>
                                                <p className="text-slate-600">
                                                    Asunción, Paraguay<br />
                                                    South America
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="sourcing">Product Sourcing</option>
                                        <option value="logistics">Logistics & Distribution</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-600/30"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
