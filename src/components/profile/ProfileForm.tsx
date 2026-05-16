"use client";

import { useState } from "react";
import { Save } from "lucide-react";
import { mockAllergies, mockUser } from "@/data";
import type { ActivityLevel, AllergyId, DietGoal, Gender } from "@/types";
import { ActivityCard } from "@/components/profile/ActivityCard";
import { AllergyCard } from "@/components/profile/AllergyCard";
import { GoalCard } from "@/components/profile/GoalCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

const activityLevels: ActivityLevel[] = [
  "Sedentary",
  "Light",
  "Moderate",
  "Active",
  "Very Active",
];
const goals: DietGoal[] = ["Lose weight", "Maintain weight", "Gain weight"];
const genders: Gender[] = ["Female", "Male", "Prefer not to say"];

export function ProfileForm() {
  const [profile, setProfile] = useState(mockUser);
  const [saved, setSaved] = useState(false);

  const toggleAllergy = (id: AllergyId) => {
    setSaved(false);
    setProfile((current) => ({
      ...current,
      allergies: current.allergies.includes(id)
        ? current.allergies.filter((allergy) => allergy !== id)
        : [...current.allergies, id],
    }));
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSaved(true);
      }}
    >
      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Profile</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Personal information
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Name"
              value={profile.name}
              onChange={(event) =>
                setProfile({ ...profile, name: event.target.value })
              }
            />
            <Input label="Email" value={profile.email} readOnly />
            <Input
              label="Age"
              type="number"
              value={profile.age}
              onChange={(event) =>
                setProfile({ ...profile, age: Number(event.target.value) })
              }
            />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </span>
              <select
                value={profile.gender}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    gender: event.target.value as Gender,
                  })
                }
                className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              >
                {genders.map((gender) => (
                  <option key={gender}>{gender}</option>
                ))}
              </select>
            </label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Body profile</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Measurements and activity
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Height"
              type="number"
              value={profile.heightCm}
              helper="Centimeters"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  heightCm: Number(event.target.value),
                })
              }
            />
            <Input
              label="Weight"
              type="number"
              value={profile.weightKg}
              helper="Kilograms"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  weightKg: Number(event.target.value),
                })
              }
            />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {activityLevels.map((level) => (
              <ActivityCard
                key={level}
                level={level}
                selected={profile.activityLevel === level}
                onSelect={(activityLevel) =>
                  setProfile({ ...profile, activityLevel })
                }
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Diet goal</p>
            <h2 className="mt-1 text-xl font-bold text-ink">Nutrition target</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {goals.map((goal) => (
              <GoalCard
                key={goal}
                goal={goal}
                selected={profile.dietGoal === goal}
                onSelect={(dietGoal) => setProfile({ ...profile, dietGoal })}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Allergies</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Allergy preferences
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {mockAllergies.map((allergy) => (
              <AllergyCard
                key={allergy.id}
                allergy={allergy}
                selected={profile.allergies.includes(allergy.id)}
                onToggle={toggleAllergy}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-brand-700">
          {saved ? "Changes saved for this prototype session." : ""}
        </p>
        <Button type="submit" size="lg">
          <Save className="h-5 w-5" />
          Save changes
        </Button>
      </div>
    </form>
  );
}
