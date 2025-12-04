import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizes = {
        sm: { width: 32, height: 32, fontSize: 'text-lg' },
        md: { width: 40, height: 40, fontSize: 'text-xl' },
        lg: { width: 56, height: 56, fontSize: 'text-2xl' },
    };

    const { width, height, fontSize } = sizes[size];

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Icon - Modern geometric "E" with technology feel */}
            <svg
                width={width}
                height={height}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Background square with rounded corners */}
                <rect
                    x="2"
                    y="2"
                    width="44"
                    height="44"
                    rx="8"
                    fill="white"
                />
                {/* Stylized "E" representing EasyWay */}
                <path
                    d="M12 12H36V18H18V21H32V27H18V30H36V36H12V12Z"
                    fill="#09090b"
                />
                {/* Arrow/pathway element representing "Way" */}
                <path
                    d="M28 21L36 24L28 27V21Z"
                    fill="#09090b"
                />
            </svg>

            {/* Text Logo */}
            <div className={`font-display font-bold tracking-tighter ${fontSize}`}>
                <span className="text-white">EasyWay</span>
                <span className="text-zinc-500">Tech</span>
            </div>
        </div>
    );
};
