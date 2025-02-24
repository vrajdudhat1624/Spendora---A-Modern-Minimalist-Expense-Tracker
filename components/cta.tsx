import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
        <p className="text-xl mb-8">Join Spendora today and start your journey to financial freedom.</p>
        <Button size="lg" variant="secondary" className="glow-on-hover">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

