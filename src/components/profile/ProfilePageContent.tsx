import { DashboardShell } from "@/components/layout/DashboardShell";
import { ProfileForm } from "@/components/profile/ProfileForm";

export function ProfilePageContent() {
  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-brand-700">Profile</p>
          <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
            Update profile and allergy data
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Edit the same personal, body, goal, activity, and allergy fields
            used by the recommendation experience.
          </p>
        </div>
        <ProfileForm />
      </div>
    </DashboardShell>
  );
}
