import { LinkPreview } from "@dhaiwat10/react-link-preview"
export function Registry() {
    return (<>
        <div>We have an Amazon wishlist <b>here</b>, or if you'd like to contribute to our honeymoon fund you can do that via <b>PayPal</b> or <b>Venmo</b></div>
        <LinkPreview url='https://www.amazon.com/KitchenAid-KSMVSA-Slicer-Shredder-Attachment/dp/B01MUTSU13/?th=1' width='400px'/>
        </>
    )
    // Display links with previews (could include amazon wishlist, could *not* include amazon wishlist)
}