import React, { useRef, useState } from 'react';
import { uploadListings, uploadContacts } from '../lib/AutoScoutClient';

export function UploadButtons(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const contactsInputRef = useRef<HTMLInputElement>(null);
  const [uploadType, setUploadType] = useState<'contacts' | 'listing'>('contacts');

  function handleListingsClick() {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
      setUploadType('listing');
    }
  }

  function handleContactsClick() {
    if (contactsInputRef && contactsInputRef.current) {
      contactsInputRef.current.click();
      setUploadType('contacts');
    }
  }

  async function handleFileSelection(event: React.SyntheticEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];
      const formData = new FormData();

      formData.append(
        "file",
        file
      );

      if (uploadType === 'contacts') {
        await uploadContacts(formData);
      } else {
        await uploadListings(formData);
      }

      window.location.reload();
    }
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          accept={'.csv'}
          onChange={handleFileSelection}
          style={{ display: 'none' }}
          type="file"
        />
        <input
          ref={contactsInputRef}
          accept={'.csv'}
          onChange={handleFileSelection}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
      <button onClick={handleListingsClick}>
        Upload Listings
      </button>
      <button onClick={handleContactsClick}>
        Upload Contacts
      </button>
    </div>
  );
}
