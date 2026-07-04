'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  title: string
  buttonText: string
}

const SERVICE_OPTIONS = [
  "Mutual Funds Investment",
  "Insurance Advisory",
  "Tax Planning",
  "Property Valuation",
  "Comprehensive Financial Planning",
  "All types of Loan"
];

export function ContactForm({ title, buttonText }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: [] as string[],
    remarks: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    services: ''
  });

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(service);
      if (isSelected) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '', email: '', services: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
      isValid = false;
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid mobile number';
      isValid = false;
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service of interest';
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
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(', ')
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', phone: '', email: '', services: [], remarks: '' });
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
            Your Name <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="form-name"
            placeholder="" 
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
            Mobile Number <span className="text-red-500">*</span>
          </Label>
          <Input 
            id="form-phone"
            placeholder="" 
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
            placeholder="" 
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

        {/* Services Checkboxes */}
        <div className="space-y-2.5">
          <Label className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Interested In <span className="text-red-500">*</span>
          </Label>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 border rounded-lg bg-slate-50/50 ${
            errors.services ? 'border-red-500' : 'border-slate-200'
          }`}>
            {SERVICE_OPTIONS.map((option) => (
              <label key={option} className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="checkbox"
                    className="peer appearance-none w-5 h-5 border border-slate-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none checked:bg-red-600 checked:border-red-600 transition-colors cursor-pointer"
                    checked={formData.services.includes(option)}
                    onChange={() => handleServiceChange(option)}
                  />
                  <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-red-600 text-xs flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="h-3 w-3" /> {errors.services}
            </p>
          )}
        </div>

        {/* Remarks input */}
        <div className="space-y-1.5">
          <Label htmlFor="form-remarks" className="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider">
            Additional Queries
          </Label>
          <Textarea 
            id="form-remarks"
            placeholder="Any specific questions or requirements?" 
            name="remarks" 
            value={formData.remarks}
            onChange={(e) => setFormData({...formData, remarks: e.target.value})}
            className="min-h-[80px] border-slate-200 focus-visible:ring-red-500 rounded-lg bg-slate-50/50 focus:bg-white transition-all resize-y"
          />
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
