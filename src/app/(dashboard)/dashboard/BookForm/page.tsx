'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
const BookForm = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishedDate: '',
    genre: '',
    price: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Book added successfully:', result);
        // Optionally, reset the form
        setFormData({
          title: '',
          author: '',
          publishedDate: '',
          genre: '',
          price: '',
        });
        router.push("/dashboard/books");
      } else {
        console.error('Failed to add book:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
        Add a New Book
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author's name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Published Date */}
        <div className="mb-4">
          <label
            htmlFor="publishedDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Genre */}
        <div className="mb-4">
          <label htmlFor="genre" className="block text-gray-700 font-medium mb-2">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select a genre
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Biography">Biography</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            placeholder="Enter price"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
