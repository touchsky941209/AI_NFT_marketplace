export default function Page() {
  return (
    <div>
      <div id='iframe' className='iframe-loading w-full h-full'>
        <iframe className="rounded-xl" suppressHydrationWarning id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&amountFiat=1500&backgroundColor=1E232C&darkMode=true&from=eth&fromFiat=usd&horizontal=false&isFiat=true&lang=en-US&link_id=bde91ff5c637c9&locales=true&logo=false&primaryColor=FC818A&to=tipsy&toFiat=tipsy&toTheMoon=true' style={{height: "356px", width: "100%", border: "none"}}></iframe>
      </div>
      <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
    </div>
  )
}
