import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/**
 * Our AuthorInfo is a reusable UI component that can be used to represent user details information.
 *
 * @property author image, author name and position, author's short information and authors's social identity.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const AuthorInfo = () => {
   return (
      <div className="container mx-auto py-12 sm:mt-8 bg-base-200 px-5 sm:px-0 rounded-xl font-work">
         <div className="flex items-center justify-center gap-4">
            <div className="avatar">
               <div className="w-16 rounded-full">
                  <Image
                     src="https://placehold.it/100x100"
                     width={64}
                     height={64}
                     alt="avatar_image"
                  />
               </div>
            </div>
            <div>
               <h5 className="text-base-content text-base sm:text-xl font-medium">
                  Jonathan Doe
               </h5>
               <span className="text-base-content/60 text-xs sm:text-sm">
                  Collaborator & Editor
               </span>
            </div>
         </div>
         <p className="text-sm sm:text-lg text-base-content/70 text-center py-6 max-w-2xl w-full mx-auto">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
         </p>
         <div className="flex items-center justify-center gap-2">
            {socialShare?.map((item, index) => (
               <Link
                  href={item?.link}
                  target="_blank"
                  key={index}
                  className="bg-secondary text-secondary-content hover:text-primary-content w-8 h-8 flex justify-center items-center rounded-md hover:bg-primary transition duration-300 ease-in-out"
                  legacyBehavior
               >
                  {item?.icon()}
               </Link>
            ))}
         </div>
      </div>
   )
}

export default AuthorInfo

// social share icons
const socialShare = [
   {
      id: 1,
      icon: () => (
         <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M14 7.04242C14 3.17679 10.8656 0.0424194 7 0.0424194C3.13438 0.0424194 0 3.17679 0 7.04242C0 10.5362 2.55938 13.4321 5.90625 13.9577V9.06648H4.12844V7.04242H5.90625V5.50023C5.90625 3.74617 6.95156 2.77648 8.55031 2.77648C9.31625 2.77648 10.1175 2.91336 10.1175 2.91336V4.63617H9.23438C8.36531 4.63617 8.09344 5.17554 8.09344 5.72992V7.04242H10.0347L9.72469 9.06648H8.09375V13.9584C11.4406 13.433 14 10.5371 14 7.04242Z"
               fill="currentColor"
            />
         </svg>
      ),
      alt: 'facebook_icon',
      link: '/',
   },
   {
      id: 2,
      icon: () => (
         <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M15.5 1.42176C14.9373 1.66624 14.342 1.82732 13.7328 1.89988C14.373 1.525 14.8545 0.929435 15.0869 0.224883C14.4816 0.578818 13.8205 0.827155 13.1319 0.959258C12.8419 0.655361 12.4932 0.413603 12.1069 0.248678C11.7205 0.0837537 11.3047 -0.00089311 10.8847 -0.000116778C9.18406 -0.000116778 7.80781 1.35613 7.80781 3.02801C7.80661 3.26056 7.83325 3.49242 7.88719 3.71863C6.66771 3.66146 5.4736 3.35038 4.38124 2.80528C3.28889 2.26017 2.32234 1.49306 1.54344 0.553008C1.27018 1.01367 1.12567 1.53927 1.125 2.07488C1.125 3.12488 1.67281 4.05301 2.5 4.59676C2.00991 4.58513 1.52987 4.45541 1.10063 4.21863V4.25613C1.10063 5.72488 2.16313 6.94676 3.56938 7.22488C3.30493 7.29538 3.03243 7.3311 2.75875 7.33113C2.56456 7.33147 2.3708 7.31263 2.18031 7.27488C2.57125 8.47801 3.70906 9.35301 5.05688 9.37801C3.96168 10.222 2.61707 10.6782 1.23438 10.6749C0.988943 10.6745 0.743739 10.6599 0.5 10.6311C1.90662 11.5293 3.5417 12.0044 5.21063 11.9999C10.8781 11.9999 13.9744 7.38426 13.9744 3.38113C13.9744 3.24988 13.9709 3.11863 13.9647 2.99051C14.5657 2.56303 15.0856 2.03179 15.5 1.42176V1.42176Z"
               fill="currentColor"
            />
         </svg>
      ),
      alt: 'twitter_icon',
      link: '/',
   },
   {
      id: 3,
      icon: () => (
         <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M9.91656 1.16656C10.6895 1.16887 11.43 1.47692 11.9766 2.02345C12.5231 2.56997 12.8311 3.31054 12.8334 4.08344V9.91656C12.8311 10.6895 12.5231 11.43 11.9766 11.9766C11.43 12.5231 10.6895 12.8311 9.91656 12.8334H4.08344C3.31054 12.8311 2.56997 12.5231 2.02345 11.9766C1.47692 11.43 1.16887 10.6895 1.16656 9.91656V4.08344C1.16887 3.31054 1.47692 2.56997 2.02345 2.02345C2.56997 1.47692 3.31054 1.16887 4.08344 1.16656H9.91656ZM9.91656 0H4.08344C1.8375 0 0 1.8375 0 4.08344V9.91656C0 12.1625 1.8375 14 4.08344 14H9.91656C12.1625 14 14 12.1625 14 9.91656V4.08344C14 1.8375 12.1625 0 9.91656 0Z"
               fill="currentColor"
            />
            <path
               d="M10.7916 4.08344C10.6185 4.08344 10.4493 4.03212 10.3054 3.93597C10.1615 3.83983 10.0494 3.70317 9.98317 3.54329C9.91694 3.3834 9.89961 3.20747 9.93338 3.03773C9.96714 2.868 10.0505 2.71209 10.1728 2.58972C10.2952 2.46735 10.4511 2.38401 10.6209 2.35025C10.7906 2.31649 10.9665 2.33382 11.1264 2.40004C11.2863 2.46627 11.423 2.57842 11.5191 2.72231C11.6152 2.86621 11.6666 3.03538 11.6666 3.20844C11.6668 3.32341 11.6443 3.43731 11.6005 3.54358C11.5566 3.64985 11.4921 3.74641 11.4108 3.82771C11.3295 3.90901 11.233 3.97345 11.1267 4.01734C11.0204 4.06122 10.9065 4.08368 10.7916 4.08344Z"
               fill="currentColor"
            />
            <path
               d="M7 4.66656C7.46151 4.66656 7.91266 4.80342 8.29639 5.05982C8.68012 5.31622 8.9792 5.68065 9.15582 6.10703C9.33243 6.53341 9.37864 7.00259 9.2886 7.45523C9.19856 7.90787 8.97633 8.32365 8.64999 8.64999C8.32365 8.97633 7.90787 9.19856 7.45523 9.2886C7.00259 9.37864 6.53341 9.33243 6.10703 9.15582C5.68065 8.9792 5.31622 8.68012 5.05982 8.29639C4.80342 7.91266 4.66656 7.46151 4.66656 7C4.66722 6.38134 4.91328 5.7882 5.35074 5.35074C5.7882 4.91328 6.38134 4.66722 7 4.66656ZM7 3.5C6.30777 3.5 5.63108 3.70527 5.0555 4.08986C4.47993 4.47444 4.03133 5.02107 3.76642 5.66061C3.50152 6.30015 3.4322 7.00388 3.56725 7.68282C3.7023 8.36175 4.03564 8.98539 4.52513 9.47487C5.01461 9.96436 5.63825 10.2977 6.31718 10.4327C6.99612 10.5678 7.69985 10.4985 8.33939 10.2336C8.97893 9.96867 9.52556 9.52007 9.91014 8.9445C10.2947 8.36892 10.5 7.69223 10.5 7C10.5 6.07174 10.1313 5.1815 9.47487 4.52513C8.8185 3.86875 7.92826 3.5 7 3.5Z"
               fill="currentColor"
            />
         </svg>
      ),
      alt: 'instagram_icon',
      link: '/',
   },
   {
      id: 4,
      icon: () => (
         <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M15.8961 2.64969C15.8961 1.24344 14.8617 0.112187 13.5836 0.112187C11.8524 0.0312499 10.0867 0 8.28236 0H7.71986C5.91986 0 4.15111 0.03125 2.41986 0.1125C1.14486 0.1125 0.110481 1.25 0.110481 2.65625C0.0323556 3.76844 -0.000769439 4.88094 0.00110556 5.99344C-0.00201944 7.10594 0.0333972 8.21948 0.107356 9.33406C0.107356 10.7403 1.14173 11.8809 2.41673 11.8809C4.23548 11.9653 6.10111 12.0028 7.99798 11.9997C9.89798 12.0059 11.7584 11.9664 13.5792 11.8809C14.8574 11.8809 15.8917 10.7403 15.8917 9.33406C15.9667 8.21844 16.0011 7.10594 15.998 5.99031C16.0051 4.87781 15.9711 3.76427 15.8961 2.64969ZM6.46986 9.05906V2.91844L11.0011 5.98719L6.46986 9.05906Z"
               fill="currentColor"
            />
         </svg>
      ),
      alt: 'linkedin_icon',
      link: '/',
   },
]
