export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <div className="inline-flex items-center justify-start h-9 px-3 rounded-md text-sm font-medium text-muted-foreground bg-muted/30">
            <div className="h-4 w-4 mr-2 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-24" />
          </div>
        </div>

        <div className="animate-pulse">
          <div className="mb-6">
            <div className="h-8 bg-muted rounded w-3/4 mb-2" />
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-5/6" />
          </div>

          <div className="space-y-2 mt-4">
            <div className="h-4 bg-muted rounded w-24" />
            <div className="h-3 bg-muted rounded w-40" />
          </div>
        </div>
      </div>
    </main>
  );
}
