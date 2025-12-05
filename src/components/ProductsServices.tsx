import { CheckCircle2, FlaskConical, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductsServices() {
    return (
        <section id="products-services" className="py-24 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-900 mb-4">
                        Products & Services
                    </h2>
                    <div className="w-24 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-light">
                        Specialized supply of high-quality Nitrogen Fertilizers for global agriculture and industry.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-primary-100 shadow-xl shadow-primary-900/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-6">
                                <FlaskConical className="w-4 h-4" />
                                Core Product
                            </div>
                            <h3 className="text-4xl font-heading font-bold text-secondary-900 mb-6">Urea 46% N</h3>
                            <p className="text-xl text-secondary-700 mb-8 leading-relaxed font-light">
                                We specialize in the global supply of Granular and Prilled Urea, the most widely used nitrogen fertilizer in the world. Our product meets the highest international quality standards.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-secondary-900">High Nitrogen Content</h4>
                                        <p className="text-secondary-600">46% minimum nitrogen content for maximum efficiency.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-secondary-900">Global Standards</h4>
                                        <p className="text-secondary-600">Compliant with international agricultural and industrial specifications.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-secondary-900">Versatile Application</h4>
                                        <p className="text-secondary-600">Suitable for direct application, blending, and industrial use.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-secondary-200">
                                <img
                                    src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Granular and Prilled Urea Fertilizer"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-secondary-100 max-w-xs hidden md:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <ShieldCheck className="w-8 h-8 text-primary-600" />
                                    <span className="font-heading font-bold text-secondary-900">Quality Assured</span>
                                </div>
                                <p className="text-sm text-secondary-600">Rigorous quality control processes from production to delivery.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-24 grid md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="text-center p-6 bg-white rounded-2xl border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Truck className="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Reliable Logistics</h3>
                        <p className="text-secondary-600">Seamless coordination of shipping and inland transport.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Secure Supply</h3>
                        <p className="text-secondary-600">Long-term partnerships with major producers ensure consistent availability.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FlaskConical className="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">Technical Support</h3>
                        <p className="text-secondary-600">Expert advice on product specifications and handling.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
