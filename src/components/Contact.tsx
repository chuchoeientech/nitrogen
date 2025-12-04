import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-900 mb-4">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-light">
                        Get in touch with our team for inquiries about global sourcing, distribution, and partnership opportunities.
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-16 items-start"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-3xl font-heading font-bold text-secondary-900 mb-6">Get in Touch</h3>
                            <p className="text-lg text-secondary-600 leading-relaxed font-light">
                                Whether you are a producer looking for market access or an industrial consumer seeking reliable supply, our team is ready to assist you.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary-900 mb-1">Email Us</h4>
                                    <p className="text-secondary-600 mb-2">For general inquiries and trade opportunities:</p>
                                    <a href="mailto:contact@nitrogenagencies.com" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                        contact@nitrogenagencies.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary-900 mb-1">Call Us</h4>
                                    <p className="text-secondary-600 mb-2">Speak directly with our commercial team:</p>
                                    <div className="space-y-1">
                                        <div>
                                            <p className="text-sm text-secondary-500">Edinburgh Office:</p>
                                            <a href="tel:+441312200321" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                                +44 131 220 0321
                                            </a>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm text-secondary-500">London Office:</p>
                                            <a href="tel:+442030088888" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                                +44 203 008 8888
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-secondary-900 mb-1">Our Locations</h4>
                                    <div className="space-y-4 mt-2">
                                        <div>
                                            <h5 className="font-semibold text-secondary-800">Registered Address (UK)</h5>
                                            <p className="text-secondary-600">
                                                4 Randolph Crescent<br />
                                                Edinburgh<br />
                                                United Kingdom<br />
                                                EH3 7TH
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-secondary-800">London Office</h5>
                                            <p className="text-secondary-600">
                                                29 Farm Street<br />
                                                Mayfair<br />
                                                London<br />
                                                W1J 5RL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-secondary-50 px-6 pt-6 pb-5 rounded-3xl border border-secondary-100 shadow-lg">
                        <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6">Send us a Message</h3>
                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white"
                                >
                                    <option value="">Select a topic...</option>
                                    <option value="sourcing">Product Sourcing</option>
                                    <option value="logistics">Logistics & Distribution</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none bg-white"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary-600/30"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
