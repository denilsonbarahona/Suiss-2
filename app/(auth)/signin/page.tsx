export const metadata = {
  title: "Sign In - Mosaic",
  description: "Page description",
};

import Image from "next/image";
import Link from "next/link";
import AuthImage from "../auth-image";
import SuissLogo from "@/components/assets/images/SuissLogo.svg";

export default function SignIn() {
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col justify-between">
            <div className="max-w-md mx-auto w-full flex flex-grow flex-col justify-center px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
                Bienvenido de nuevo! ✨
              </h1>
              {/* Form */}
              <form className="border-b pb-6">
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      className="form-input w-full"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <Link
                    className="btn w-full rounded-3xl bg-app-light-blue-900 text-white"
                    href="/"
                  >
                    Iniciar Sesión
                  </Link>
                </div>
              </form>
            </div>

            <div className="max-w-md mx-auto w-full px-4 py-8 flex">
              <Image
                src={SuissLogo}
                priority
                width={126}
                height={60}
                alt="Authentication"
              />
            </div>
          </div>
        </div>

        <AuthImage />
      </div>
    </main>
  );
}
