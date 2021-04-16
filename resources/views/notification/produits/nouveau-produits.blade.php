@component('mail::message')
# Du nouveau sur Shopify ! 

un nouveau produit vient d'etre ajouté sur votre plate forme Shopify
N'hésitez pas à le consulter en cliquant sur le bouton ci-dessous: 

@component('mail::button', ['url' => url('produits')])
voir le produit
@endcomponent

Merci d'avoir choisi Shopify pour votre shopping !,<br>
{{ config('app.name') }}
@endcomponent
