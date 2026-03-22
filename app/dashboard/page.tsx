import { DashboardWidgets } from '@/components/dashboard/Widgets';
import { Button } from '@/components/ui/Button';
import { Settings, Plus } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">My Dashboard</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" leftIcon={<Settings className="h-4 w-4" />}>
            Manage Widgets
          </Button>
          <Button leftIcon={<Plus className="h-4 w-4" />}>
            Add Widget
          </Button>
        </div>
      </div>

      <DashboardWidgets />
    </div>
  );
}
