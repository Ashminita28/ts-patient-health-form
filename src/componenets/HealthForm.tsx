import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { patientSchema } from '@/utils/validation';
import PersonalInfoSection from './FormSections/PersonalInfoSection';
import HealthInfoSection from './FormSections/HealthInfoSection';
import PrivacyConsentSection from './FormSections/PrivacyConsentSection';
import type { FormValues } from '@/utils/validation';
// import { FormManagement } from '@/hooks/FormManagement';
import { formStore } from '@/hooks/form-store';

interface HealthFormProps {
  addRecord: (data: FormValues) => void;
  updateRecord: (id: string, data: FormValues) => void;
  onClose: () => void;
}

const HealthForm: React.FC<HealthFormProps> = ({
  addRecord,
  updateRecord,
  onClose,
}) => {
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
  const { editingId, resetForm, clearEditingMode } = formStore();

  const onSubmit = (data: FormValues) => {
    console.log('Final Form Data:', data);
    if (editingId) {
      updateRecord(editingId, data);
    } else {
      addRecord(data);
    }
    resetForm();
    clearEditingMode();
    onClose();
  };

  return (
    <div className="min-h-screen py-10 px-5 bg-[#fafbfc]">
      <Button onClick={onClose}>Cancel</Button>
      <Form {...form}>
        <form
          id="form-rhf-complex"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10"
        >
          <PersonalInfoSection form={form} />
          <HealthInfoSection form={form} />
          <PrivacyConsentSection form={form} />
          <div className="flex justify-end gap-3 border-t pt-6">
            <Button form="form-rhf-complex" type="submit">
              "Submit Form"
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HealthForm;
