import Link from "next/link";

export default function MenuPosts() {
  return (
    <div className="mt-9 mb-16 flex flex-col gap-9">
        <Link href="/" className="flex items-center gap-5">
            <div className="flex flex-col gap-1" style={{ flex: 4 }}>
                <div className="flex gap-1">
                    <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo in </span>
                    <span className="text-[--blogText] font-medium text-sm">Security</span>
                </div>

                <div className="text-xs">
                    <h3 className="text-[--text] text-lg font-medium">
                        The best pratices for building a security application
                    </h3>
                </div>
            </div>
        </Link>

        <Link href="/" className="flex items-center gap-5">
            <div className="flex flex-col gap-1" style={{ flex: 4 }}>
                <div className="flex gap-1">
                    <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo in </span>
                    <span className="text-[--blogText] font-medium text-sm">Carer</span>
                </div>

                <div className="text-xs">
                    <h3 className="text-[--text] text-lg font-medium">
                        6 Best Resources for Tech Interview Preparation in 2024
                    </h3>
                </div>
            </div>
        </Link>

        <Link href="/" className="flex items-center gap-5">
            <div className="flex flex-col gap-1" style={{ flex: 1 }}>
                <div className="flex gap-1">
                    <span className="text-[--blogText] font-medium text-sm">Miguel Ângelo in</span>
                    <span className="text-[--blogText] font-medium text-sm">Back end</span>
                </div>

                <div className="text-xs">
                    <h3 className="text-[--text] text-lg font-medium">
                        How to create a application with NestJS
                    </h3>
                </div>
            </div>
        </Link>
    </div>
  );
};
