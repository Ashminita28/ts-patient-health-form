import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { patientSchema } from '@/utils/validation';
import PersonalInfoSection from './FormSections/PersonalInfoSection';
import HealthInfoSection from './FormSections/HealthInfoSection';
import PrivacyConsentSection from './FormSections/PrivacyConsentSection';
import type { FormValues } from '@/utils/validation';
import { DataManagement } from '@/hooks/DataManagement';
import { FormManagement } from '@/hooks/FormManagement';

const HealthForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      id: '',
      name: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
      height: '',
      weight: '',
      bloodPressure: '',
      bloodTempreture: '',
      bloodType: '',
      dietType: '',
      allergies: '',
      sleepHours: '',
      chronicDiseases: [],
      exerciseFrequency: '',
      medication: '',
      privacyConsent: false,
    },
  });
  const { editingId, resetForm, clearEditingMode } = FormManagement();
  const { addRecord, updateRecord } = DataManagement();

  const onSubmit = (data: FormValues) => {
    console.log('Final Form Data:', data);
    if (editingId) {
      updateRecord(editingId, data);
    } else {
      addRecord(data);
    }
    resetForm();
    clearEditingMode();
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
