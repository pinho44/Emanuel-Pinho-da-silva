import React from 'react';

interface IconProps {
    className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const ManicureIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

export const PedicureIcon: React.FC<IconProps> = ({ className }) => (
     <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const GelNailsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const SpaIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path fillRule="evenodd" d="M10.868 2.884c.321-.772.117-1.623-.454-2.131A1.5 1.5 0 0 0 8.35.636L6.728 2.228a2.25 2.25 0 0 1-.884.518l-1.95.551a2.25 2.25 0 0 0-1.503 2.316l.303 1.834a2.25 2.25 0 0 1-.518.884l-1.592 1.592a1.5 1.5 0 0 0 .531 2.571l1.834.303a2.25 2.25 0 0 1 .884.518l.551 1.95a2.25 2.25 0 0 0 2.316 1.503l1.834-.303a2.25 2.25 0 0 1 .884-.518l1.592-1.592a1.5 1.5 0 0 0-.531-2.571l-1.834-.303a2.25 2.25 0 0 1-.884-.518l-.551-1.95a2.25 2.25 0 0 0-2.316-1.503l-1.834.303a2.25 2.25 0 0 1-.884.518L8.35 15.136a1.5 1.5 0 0 0-.531 2.571l1.592 1.592a2.25 2.25 0 0 1 .518.884l.303 1.834a2.25 2.25 0 0 0 2.316 1.503l1.95-.551a2.25 2.25 0 0 1 .884-.518l1.592-1.592a1.5 1.5 0 0 0-.531-2.571l-1.834-.303a2.25 2.25 0 0 1-.884-.518l-.551-1.95a2.25 2.25 0 0 0-1.503-2.316l-1.95-.551a2.25 2.25 0 0 1-.884-.518L11.65 4.364a1.5 1.5 0 0 0-2.571.531l.303 1.834a2.25 2.25 0 0 1-.518.884L7.272 9.207a1.5 1.5 0 0 0 .531 2.571l1.834.303a2.25 2.25 0 0 1 .884.518l.551 1.95a2.25 2.25 0 0 0 2.316 1.503l1.834-.303a2.25 2.25 0 0 1 .884-.518l1.592-1.592a1.5 1.5 0 0 0-.531-2.571L15.636 11.65a2.25 2.25 0 0 1-.884-.518l-.551-1.95a2.25 2.25 0 0 0-2.316-1.503l-1.834.303a2.25 2.25 0 0 1-.884.518L7.06 9.646a1.5 1.5 0 0 0 .531 2.571l1.592 1.592a2.25 2.25 0 0 1 .518.884l.303 1.834a2.25 2.25 0 0 0 2.316 1.503l1.95-.551a2.25 2.25 0 0 1 .884-.518l1.592-1.592a1.5 1.5 0 0 0-2.571-.531L13.132 15.636a2.25 2.25 0 0 1-.884.518l-1.95.551a2.25 2.25 0 0 0-1.503 2.316l.303 1.834a1.5 1.5 0 0 0 2.571.531l1.592-1.592a2.25 2.25 0 0 1 .884-.518l1.95-.551a2.25 2.25 0 0 0 1.503-2.316l-.303-1.834a2.25 2.25 0 0 1 .518-.884l1.592-1.592a1.5 1.5 0 0 0-.531-2.571l-1.834-.303a2.25 2.25 0 0 1-.884-.518l-.551-1.95a2.25 2.25 0 0 0-1.503-2.316l-1.95-.551a2.25 2.25 0 0 1-.884-.518L9.132 2.868a1.5 1.5 0 0 0-2.571-.531l-.303 1.834a2.25 2.25 0 0 1-.518.884L4.149 6.646a1.5 1.5 0 0 0-.531 2.571l1.834.303a2.25 2.25 0 0 1 .884.518l.551 1.95a2.25 2.25 0 0 0 2.316 1.503l1.834-.303a2.25 2.25 0 0 1 .884-.518l1.592-1.592a1.5 1.5 0 0 0 .531-2.571L10.868 2.884Z" clipRule="evenodd" />
  </svg>
);