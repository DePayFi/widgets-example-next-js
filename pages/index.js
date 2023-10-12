import dynamic from "next/dynamic"

const DePayWidgetsButton = dynamic(()=>import('../components/DePayWidgetsButton') , { ssr: false })

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>

      <DePayWidgetsButton
        integration={ "YOUR_INTEGRATION_ID" }
        payload={
          {
            userId: '123',
            itemId: 1,
            quantity: 2
          }
        }
      />

    </div>
  );
}
