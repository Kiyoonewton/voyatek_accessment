import { UserTable } from '@/components/common/Table'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CiCirclePlus, CiSearch } from 'react-icons/ci'
import { VscListFilter } from 'react-icons/vsc'

const TableComponent = () => {
  return (
    <>
      <div className="flex justify-between p-5 bg-white">
        <div className="w-1/3 flex gap-4">
          <div className="relative border rounded w-full">
            <input
              placeholder="Search here ..."
              className="pl-12 py-2 rounded w-full outline-none"
            />
            <CiSearch className="absolute top-2.5 left-5" size={20} />
          </div>
          <Button className="bg-blue-700 flex gap-1">
            <VscListFilter size={20} />
            Filter
          </Button>
        </div>
        <Button className="bg-blue-700 flex gap-1">
          <CiCirclePlus size={20} />
          New User
        </Button>
      </div>
      <UserTable />
    </>
  )
}

export default TableComponent