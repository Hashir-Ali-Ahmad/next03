
import Image from "next/image";

export default function Home() {
  return (
    <>
  <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <Image className="w-40 h-40 rounded-full mx-auto" src="/model.png" alt="" width="384" height="512"></Image>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg text-center font-med">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="text-center">
      <div className="text-yellow-400">
        Hashir Ali Ahmad
      </div>
      <div className="text-yellow-600">
        Gen AI Engineer, Mantech Pakistan
      </div>
    </figcaption>
  </div>
</figure>
  </>
  );
}
