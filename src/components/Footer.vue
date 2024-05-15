<template>

    <footer>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F9%2FDarth-Vader-Mask-PNG-HD-Image.png&f=1&nofb=1&ipt=1f163f7db055f99b6551d1b34ebcaa9911b1ff4cd08bd75f2c9068d9019e757a&ipo=images">
        <p>c/ Aiguablava 121, 08033 Barcelona</p>
        <div class="redesSociales">
            <img src="../assets/facebook.png">
            <img src="../assets/gorjeo.png">
            <img src="../assets/instagram.png">
        </div>
    </footer>

</template>


<script>
    export default {
        name: 'FooterComponent'
    }
</script>


<style>
    footer{
        background-color: blueviolet;
        height: 100px;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
    }

    img{
        height: 100px;
        width: 100px;
    }

    div img{
        height: 30px;
        width: 30px;

    }
</style>