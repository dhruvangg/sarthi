'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react'

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
      newErrors.name = 'Full name is required';
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
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.services) {
      newErrors.services = 'Please select a service of interest';
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
      <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Consultation Scheduled!</h4>
        <p className="text-slate-600 dark:text-slate-300 max-w-sm mx-auto text-sm leading-relaxed mb-6">
          Thank you for reaching out. An advisor from SS Sarthi will review your request and call you back within 24 business hours.
        </p>
        <Button 
          onClick={() => setStatus("idle")} 
          variant="outline" 
          className="border-slate-300 hover:bg-slate-50 font-medium text-slate-700 transition-colors"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-5 w-5 text-red-600" />
        <h3 className="text-2xl font-bold text-slate-950 dark:text-white tracking-tight">{title}</h3>
      </div>
      
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="space-y-1.5">
          <Label htmlFor="form-name" className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Your Full Name
          </Label>
          <Input 
            id="form-name"
            placeholder="John Doe" 
            name="name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={`h-11 border-slate-200 focus-visible:ring-red-500 rounded-lg bg-slate-50/50 focus:bg-white transition-all ${
              errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
          />
          {errors.name && (
            <p className="text-red-600 text-xs flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="h-3 w-3" /> {errors.name}
            </p>
          )}
        </div>
        
        {/* Phone input */}
        <div className="space-y-1.5">
          <Label htmlFor="form-phone" className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Phone Number
          </Label>
          <Input 
            id="form-phone"
            placeholder="+91 98765 43210" 
            name="phone" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={`h-11 border-slate-200 focus-visible:ring-red-500 rounded-lg bg-slate-50/50 focus:bg-white transition-all ${
              errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="h-3 w-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <Label htmlFor="form-email" className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Email Address
          </Label>
          <Input 
            id="form-email"
            placeholder="hello@sarthisip.com" 
            name="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`h-11 border-slate-200 focus-visible:ring-red-500 rounded-lg bg-slate-50/50 focus:bg-white transition-all ${
              errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="h-3 w-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Services Select */}
        <div className="space-y-1.5">
          <Label htmlFor="form-service" className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Interested In
          </Label>
          <select 
            id="form-service"
            className={`w-full h-11 px-3 border ${
              errors.services ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-red-500'
            } rounded-lg bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all text-sm text-slate-800`} 
            name="services"
            value={formData.services}
            onChange={(e) => setFormData({...formData, services: e.target.value})}
          >
            <option value="" disabled>Select Primary Interest</option>
            <option value="Mutual Funds Investment">Mutual Funds Investment</option>
            <option value="Insurance Advisory">Insurance Advisory</option>
            <option value="Tax Planning">Tax Planning</option>
            <option value="Property Valuation">Property Valuation</option>
            <option value="Comprehensive Financial Planning">Comprehensive Financial Planning</option>
          </select>
          {errors.services && (
            <p className="text-red-600 text-xs flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="h-3 w-3" /> {errors.services}
            </p>
          )}
        </div>

        {status === "error" && (
          <div className="p-3.5 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 text-sm rounded-lg border border-red-200/50 flex gap-2 items-start">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <span>There was an error submitting the form. Please check your internet connection and try again.</span>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-11 bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md shadow-red-600/10 transition-all rounded-lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Scheduling Advisor..." : buttonText}
        </Button>
      </form>
    </div>
  )
}
