<template>
    <slot></slot>
    <form action="">
        <div class="row">
            <div class="amount-card" @click="closeButton">
                200
            </div>
            <div class="amount-card">
                500
            </div>
            <div class="amount-card">
                700
            </div>
        </div>
        <div class="row">
            <div class="amount-card">
                {{ minimum }}
            </div>
        </div>
        <label for="">Amount</label>
        <input type="number" name="amount" >
        <button>Pay</button>
    </form>
</template>

<script>
export default {
    props: ['minimum'],
    methods: {
        closeButton(){
            this.$emit('close')
        }
    }
}
</script>

<style>
    .row{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }
    .amount-card{
        background-color:blue;
        color: #fff;
        padding: 20px 40px;
        border-radius: 4px;
        margin: 20px;
    }

</style>