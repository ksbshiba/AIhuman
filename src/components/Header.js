
import React from 'react'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kFetoIGqLWZ
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-[#333333]">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="Logo"
              className="h-10"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width="120"
            />
            <div className="ml-10 space-x-8">
              <Link className="text-white hover:text-gray-300" href="#">
                トップ
              </Link>
              <Link className="text-white hover:text-gray-300" href="#">
                キャラクター
              </Link>
              <Link className="text-white hover:text-gray-300" href="#">
                メディア
              </Link>
              <Link className="text-white hover:text-gray-300" href="#">
                更新情報
              </Link>
              <Link className="text-white hover:text-gray-300" href="#">
                ゲーム情報
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button className="bg-[#000000] text-white hover:bg-[#1a1a1a] mr-5">MENU</Button>
            <img
              alt="App Store"
              className="h-10"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width="120"
            />
            <img
              alt="Google Play"
              className="h-10 ml-3"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width="120"
            />
          </div>
        </div>
      </div>
    </div>
  )
}




