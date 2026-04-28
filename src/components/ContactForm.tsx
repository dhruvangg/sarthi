'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ContactFormProps {
  title: string
  buttonText: string
}

export function ContactForm({ title, buttonText }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    services: ''
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', email: '', services: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.services) {
      newErrors.services = 'Please select a service';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/xkoklyde", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', phone: '', email: '', services: '' });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
        <p className="text-gray-600">We have received your request and will contact you shortly.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-6 w-full">Send Another Request</Button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input 
            placeholder="Your Name" 
            name="name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <Input 
            placeholder="Phone Number" 
            name="phone" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <Input 
            placeholder="Email Address" 
            name="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <select 
            className={`w-full p-3 border ${errors.services ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`} 
            name="services"
            value={formData.services}
            onChange={(e) => setFormData({...formData, services: e.target.value})}
          >
            <option value="" disabled>Select Primary Interest</option>
            <option value="Mutual Fund Planning">Mutual Fund Planning</option>
            <option value="Insurance Advisory">Insurance Advisory</option>
            <option value="Tax Planning">Tax Planning</option>
            <option value="Property Valuation">Property Valuation</option>
            <option value="Comprehensive Financial Planning">Comprehensive Financial Planning</option>
          </select>
          {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services}</p>}
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
            There was an error submitting the form. Please try again.
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : buttonText}
        </Button>
      </form>
    </>
  )
}
