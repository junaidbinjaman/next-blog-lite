import Hero from './_components/Hero'
import InstagramFeedSection from '@/components/sections/InstagramFeedSection'
import ContactSection from '@/components/sections/ContactSection'
import MapSection from './_components/MapSection'

function ContactPage() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Hero />
      <InstagramFeedSection />
      <ContactSection />
      <MapSection />
    </div>
  )
}

export default ContactPage