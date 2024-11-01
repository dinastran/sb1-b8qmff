import React, { useState } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { MutabaahChecklist } from './components/MutabaahChecklist';
import { User, ChecklistData } from './types';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [checklist, setChecklist] = useState<ChecklistData>({
    shuburJamaah: false,
    quranReading: false,
  });

  const handleRegister = (userData: User) => {
    setUser(userData);
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {!isRegistered ? (
          <RegistrationForm onRegister={handleRegister} />
        ) : (
          user && (
            <MutabaahChecklist
              user={user}
              checklist={checklist}
              onChecklistChange={setChecklist}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;