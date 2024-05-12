'use client'

import { DefaultCard } from "../components/DefaultCard";


export const Content = () => {

    return (
        <div>
            

            <section id="services" className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/400x300/?website" alt="Web Design" className="w-full h-64 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/401x301/?website" alt="Web Development" className="w-full h-64 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/402x302/?websites" alt="SEO" className="w-full h-64 object-cover rounded-t-lg" />
                            <h3 className="text-xl font-semibold mb-4">SEO</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/400x300/?portfolio" alt="Portfolio Item" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/401x301/?portfolio" alt="Portfolio Item" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/408x307/?portfolio" alt="Portfolio Item" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="clients" className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
                    <div className="flex justify-center items-center">
                        <img src="https://source.unsplash.com/random/200x100/?clients" alt="Client 1" className="mr-8" />
                        <img src="https://source.unsplash.com/random/201x101/?clients" alt="Client 2" className="mr-8" />
                        <img src="https://source.unsplash.com/random/202x102/?clients" alt="Client 3" className="mr-8" />
                        <img src="https://source.unsplash.com/random/203x103/?clients" alt="Client 4" className="mr-8" />
                    </div>
                </div>
            </section>

            <section id="blogs" className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/404x304/?AI" alt="Blog Post" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Blog Title 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/401x300/?programing" alt="Blog Post" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Blog Title 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md">
                            <img src="https://source.unsplash.com/random/402x300/?programing" alt="Blog Post" className="w-full h-64 object-cover rounded-t-lg" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">Blog Title 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-sm text-gray-600 mt-4">- John Doe</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-sm text-gray-600 mt-4">- Jane Smith</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className="text-sm text-gray-600 mt-4">- Michael Johnson</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <p className="text-lg text-center">For inquiries, please contact us at contact@example.com or call us at +1234567890.</p>
                </div>
            </section>

            <section id="about" className="bg-gray-100 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
                    <p className="text-lg text-center">We are a passionate team dedicated to providing innovative solutions for our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
        </div>
    );
}