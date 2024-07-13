import { UserProps } from '@/app/settings/types'
import Userform from '@/components/common/Forms'
import { UserTable } from '@/components/common/Table'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { CiSearch } from 'react-icons/ci'
import { VscListFilter } from 'react-icons/vsc'

const TableComponent:FC<{data:UserProps[] }> = (props) => {
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
        <Userform type="create"/>
      </div>
      <UserTable data={props?.data}/>
    </>
  )
}

export default TableComponent