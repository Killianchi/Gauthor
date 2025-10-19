import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
  format: string;
}

const countries: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1', format: '(###) ###-####' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44', format: '#### ### ####' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1', format: '(###) ###-####' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61', format: '#### ### ###' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91', format: '##### #####' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49', format: '### ########' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33', format: '# ## ## ## ##' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dialCode: '+34', format: '### ### ###' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dialCode: '+39', format: '### ### ####' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55', format: '(##) #####-####' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dialCode: '+52', format: '## #### ####' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81', format: '##-####-####' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dialCode: '+82', format: '##-####-####' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86', format: '### #### ####' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dialCode: '+65', format: '#### ####' },
];

function formatPhoneNumber(value: string, format: string): string {
  const numbers = value.replace(/\D/g, '');
  let formatted = '';
  let numIndex = 0;

  for (let i = 0; i < format.length && numIndex < numbers.length; i++) {
    if (format[i] === '#') {
      formatted += numbers[numIndex];
      numIndex++;
    } else {
      formatted += format[i];
    }
  }

  return formatted;
}

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

export function PhoneInput({ value, onChange, selectedCountry, onCountryChange }: PhoneInputProps) {
  const country = countries.find(c => c.code === selectedCountry) || countries[0];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numbers = inputValue.replace(/\D/g, '');
    const formatted = formatPhoneNumber(numbers, country.format);
    onChange(formatted);
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone-input" className="text-muted-foreground">
          Phone number
        </Label>
        <div className="flex gap-2">
          <div className="flex items-center justify-center h-14 px-4 bg-white border border-border rounded-lg shadow-sm min-w-[80px]">
            <span className="text-xl mr-2">{country.flag}</span>
            <span className="text-muted-foreground">{country.dialCode}</span>
          </div>
          <Input
            id="phone-input"
            type="tel"
            value={value}
            onChange={handlePhoneChange}
            placeholder={country.format.replace(/#/g, '0')}
            className="flex-1 h-14 bg-white border-border shadow-sm hover:border-foreground/20 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
