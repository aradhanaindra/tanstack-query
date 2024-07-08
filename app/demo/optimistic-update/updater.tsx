"use client"
import React, { useCallback, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { ArrowArcLeft } from '@phosphor-icons/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";

function Updater() {
  const queryClient = useQueryClient()
  const [value, setValue] = React.useState(`{
  "products": [
    {
      "name": "Hand Sanitizer Bergamot",
      "price": 110000,
      "imageURL": "/images/hs-bergamot.png",
      "category": "Hand Sanitizer"
    },
    {
      "name": "Hand Sanitizer Vertiver",
      "price": 110000,
      "imageURL": "/images/hs-vertiver.png",
      "category": "Hand Sanitizer"
    },
    {
      "name": "Hand Sanitizer Patchouli",
      "price": 110000,
      "imageURL": "/images/hs-patchouli.png",
      "category": "Hand Sanitizer"
    },
    {
      "name": "Hand Sanitizer Ylang",
      "price": 110000,
      "imageURL": "/images/hs-ylang.png",
      "category": "Hand Sanitizer"
    },
    {
      "name": "Hand Wash Bergamot",
      "price": 170000,
      "imageURL": "/images/hw-bergamot.png",
      "category": "Hand Wash"
    },
    {
      "name": "Hand Wash Vertiver",
      "price": 170000,
      "imageURL": "/images/hw-vertiver.png",
      "category": "Hand Wash"
    },
    {
      "name": "Hand Wash Patchouli",
      "price": 170000,
      "imageURL": "/images/hw-patchouli.png",
      "category": "Hand Wash"
    },
    {
      "name": "Hand Wash Ylang",
      "price": 170000,
      "imageURL": "/images/hw-ylang.png",
      "category": "Hand Wash"
    },
    {
      "name": "Reed Diffuser Bergamot",
      "price": 240000,
      "imageURL": "/images/rd-bergamot.png",
      "category": "Reed Diffuser"
    },
    {
      "name": "Reed Diffuser Vertiver",
      "price": 240000,
      "imageURL": "/images/rd-vertiver.png",
      "category": "Reed Diffuser"
    },
    {
      "name": "Reed Diffuser Patchouli",
      "price": 240000,
      "imageURL": "/images/rd-patchouli.png",
      "category": "Reed Diffuser"
    },
    {
      "name": "Reed Diffuser Ylang",
      "price": 240000,
      "imageURL": "/images/rd-ylang.png",
      "category": "Reed Diffuser"
    }
  ]
}`);

  const onChange = useCallback((val: string) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: string) => {
      return fetch("http://localhost:3000/api/products/optimistic-update/insert", {
        method: "POST",
        body: data,
        cache: "no-store"
      })
    },
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: ['optimistic-products'] })
      const previousData = queryClient.getQueryData(['optimistic-products'])
      const newData = JSON.parse(value)
      queryClient.setQueryData(['optimistic-products'], newData)
      return { previousData }
    },
    onSuccess: (response, variables, context) => {
      toast.success("Update data success");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to update data");
      queryClient.setQueryData(['optimistic-products'], context!.previousData)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['optimistic-products'] })
    },
  })

  




  return (
    <div className='space-y-4 w-[700px]'>
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold text-white w-max">Code Editor</h1>
        <div className='flex gap-4 *:text-white *:flex *:items-center *:gap-2 *:px-4 *:py-2 *:rounded *:transition-colors'>
          {/* <button type="button" className='border border-neutral-800 hover:bg-neutral-800' onClick={() => refetch()}><ArrowArcLeft />Reset</button> */}
          <button type="button" className='bg-green-900 hover:bg-green-800' onClick={() => mutate(value)} disabled={isPending}>Submit</button>
        </div>
      </div>
      <CodeMirror value={value} height="800px" width='700px' extensions={[json()]} onChange={onChange} theme={vscodeDark} />
    </div>
  )

}
export default Updater;