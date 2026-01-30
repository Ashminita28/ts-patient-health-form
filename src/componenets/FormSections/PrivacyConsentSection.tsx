import type { FormValues } from '@/utils/validation';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import type { UseFormReturn } from 'react-hook-form';

interface PrivacyConsentSectionProps {
  form: UseFormReturn<FormValues>;
}

const PrivacyConsentSection = ({ form }: PrivacyConsentSectionProps) => {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-xl">Privacy Agreement</h2>
        <FormField
          control={form.control}
          name="privacyConsent"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>I agree to the privacy policay*</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default PrivacyConsentSection;
