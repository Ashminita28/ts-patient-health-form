import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { patientSchema } from '@/utils/validation';
import PersonalInfoSection from './FormSections/PersonalInfoSection';
import HealthInfoSection from './FormSections/HealthInfoSection';
import PrivacyConsentSection from './FormSections/PrivacyConsentSection';
import type { FormValues } from '@/utils/validation';

const HealthForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      chronicDiseases: [],
      privacyConsent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Final Form Data:', data);
  };

  return (
    <Form {...form}>
      <form
        id="form-rhf-complex"
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto space-y-8"
      >
        <PersonalInfoSection form={form} />
        <HealthInfoSection form={form} />
        <PrivacyConsentSection form={form} />
        <Button form="form-rhf-complex" type="submit">
          "Submit Form"
        </Button>
      </form>
    </Form>
  );
};

export default HealthForm;
