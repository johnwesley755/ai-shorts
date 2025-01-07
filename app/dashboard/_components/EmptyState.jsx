import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const EmptyState = () => {
  return (
    <div className="p-5 flex items-center flex-col mt-10 border-2 border-dotted py-24">
      <h2>You don't have short video created</h2>
      <Link href={"dashboard/create-new"}>
        <Button>Create New Short Video</Button>
      </Link>
    </div>
  );
}

export default EmptyState