"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

export default function DropdownNotifications({
  align,
}: {
  align?: "left" | "right";
}) {
  return (
    <Menu as="div" className="relative inline-flex">
      {({ open }) => (
        <>
          <Menu.Button
            className={`w-8 h-8 flex items-center justify-center bg-app-gray-50 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ${
              open && "bg-slate-200"
            }`}
          >
            <span className="sr-only">Notifications</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-app-gray-800 dark:text-slate-400"
                d="M6.2625 13C6.99583 13 7.59583 12.4 7.59583 11.6667H4.92917C4.92917 12.4 5.52917 13 6.2625 13ZM10.2625 9V5.66667C10.2625 3.62 9.17583 1.90667 7.2625 1.45333V1C7.2625 0.446667 6.81583 0 6.2625 0C5.70917 0 5.2625 0.446667 5.2625 1V1.45333C3.35584 1.90667 2.2625 3.61333 2.2625 5.66667V9L0.929169 10.3333V11H11.5958V10.3333L10.2625 9ZM8.92917 9.66667H3.59584V5.66667C3.59584 4.01333 4.6025 2.66667 6.2625 2.66667C7.9225 2.66667 8.92917 4.01333 8.92917 5.66667V9.66667Z"
              />
            </svg>
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white dark:border-[#182235] rounded-full"></div>
          </Menu.Button>
          <Transition
            className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-[20rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              align === "right" ? "right-0" : "left-0"
            }`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-4">
              Notifications
            </div>
            <Menu.Items as="ul" className="focus:outline-none">
              <Menu.Item
                as="li"
                className="border-b border-slate-200 dark:border-slate-700 last:border-0"
              >
                {({ active }) => (
                  <Link
                    className={`block py-2 px-4 ${
                      active && "bg-slate-50 dark:bg-slate-700/20"
                    }`}
                    href="#0"
                  >
                    <span className="block text-sm mb-2">
                      📣{" "}
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        Edit your information in a swipe
                      </span>{" "}
                      Sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </span>
                    <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
                      Feb 12, 2021
                    </span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="li"
                className="border-b border-slate-200 dark:border-slate-700 last:border-0"
              >
                {({ active }) => (
                  <Link
                    className={`block py-2 px-4 ${
                      active && "bg-slate-50 dark:bg-slate-700/20"
                    }`}
                    href="#0"
                  >
                    <span className="block text-sm mb-2">
                      📣{" "}
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        Edit your information in a swipe
                      </span>{" "}
                      Sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </span>
                    <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
                      Feb 9, 2021
                    </span>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item
                as="li"
                className="border-b border-slate-200 dark:border-slate-700 last:border-0"
              >
                {({ active }) => (
                  <Link
                    className={`block py-2 px-4 ${
                      active && "bg-slate-50 dark:bg-slate-700/20"
                    }`}
                    href="#0"
                  >
                    <span className="block text-sm mb-2">
                      🚀
                      <span className="font-medium text-slate-800 dark:text-slate-100">
                        Say goodbye to paper receipts!
                      </span>{" "}
                      Sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim.
                    </span>
                    <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
                      Jan 24, 2020
                    </span>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
